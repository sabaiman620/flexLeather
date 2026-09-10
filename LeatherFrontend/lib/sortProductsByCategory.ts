export type GetSlugFn<T> = (item: T) => string | undefined

// canonical priority
const PRIORITY = ['men', 'women', 'office', 'kids', 'gift-ideas']
const PRIORITY_MAP: Record<string, number> = PRIORITY.reduce((acc, k, i) => ({ ...acc, [k]: i }), {})

// common synonyms or aliases to increase matching robustness
const SYNONYMS: Record<string, string[]> = {
  men: ['men', 'man', 'mens', 'male'],
  women: ['women', 'woman', 'womens', 'female', 'ladies', 'lady'],
  office: ['office', 'work', 'business'],
  kids: ['kids', 'children', 'child', 'kids-teens', 'boys', 'girls'],
  'gift-ideas': ['gift', 'gifts', 'gift-ideas', 'present', 'gifts-ideas']
}

function normalizeSlug(s?: string | null) {
  if (!s) return ''
  return String(s).toLowerCase().trim()
}

function tokensFromSlug(s: string) {
  return s.split(/[-_\s]+/).filter(Boolean)
}

function getPriorityFromSlug(slug?: string | null) {
  const s = normalizeSlug(slug)
  if (!s) return Number.MAX_SAFE_INTEGER

  // exact match
  if (PRIORITY_MAP.hasOwnProperty(s)) return PRIORITY_MAP[s]

  // token match: e.g., 'women-wallets' -> 'women'
  const tokens = tokensFromSlug(s)
  for (const t of tokens) {
    if (PRIORITY_MAP.hasOwnProperty(t)) return PRIORITY_MAP[t]
  }

  // check synonyms
  for (const [key, syns] of Object.entries(SYNONYMS)) {
    for (const syn of syns) {
      if (s === syn || s.includes(syn) || tokens.includes(syn)) {
        return PRIORITY_MAP[key]
      }
    }
  }

  return Number.MAX_SAFE_INTEGER
}

/**
 * Returns a new array sorted by category priority (MEN → WOMEN → OFFICE → KIDS → GIFT IDEAS).
 * Unknown categories will appear after prioritized ones. The function does not mutate the input array.
 * getSlug receives an item and should return a string (preferably parentCategorySlug or categorySlug).
 */
export function sortProductsByCategory<T>(items: T[], getSlug?: GetSlugFn<T>): T[] {
  if (!Array.isArray(items) || items.length === 0) return [...items]

  // create a stable mapping of original index to preserve order for equal-priority items
  return [...items]
    .map((it, idx) => ({ it, idx }))
    .sort((A, B) => {
      const a = A.it as any
      const b = B.it as any
      const sa = normalizeSlug(getSlug ? getSlug(a) : (a.parentCategorySlug || a.categorySlug || a.category || ''))
      const sb = normalizeSlug(getSlug ? getSlug(b) : (b.parentCategorySlug || b.categorySlug || b.category || ''))

      const pa = getPriorityFromSlug(sa)
      const pb = getPriorityFromSlug(sb)

      if (pa !== pb) return pa - pb
      return A.idx - B.idx
    })
    .map(x => x.it)
}

export const priorityList = PRIORITY
