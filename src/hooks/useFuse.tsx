import { useState } from 'react'
import Fuse from 'fuse.js'

function fuzzySearch({ fuse, data, term }: any) {
  const result = fuse.search(`${term}`)
  return term ? result : data
}

function useFuse({ data, options }: any) {
  const [term, setTerm] = useState('')

  const fuseOptions = {
    threshold: 0.2,
    ...options,
  }

  const fuse = new Fuse(data, fuseOptions)

  const result = fuzzySearch({ data, term, fuse })

  const reset = () => setTerm('')

  return { result, search: setTerm, term, reset }
}

export default useFuse
