// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue'
const { getItems } = useDirectusItems()

export function fetchUrl(url) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null
    // unref() unwraps potential refs
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch()
  }

  return { data, error }
}

export function fetchDirectusItems(items, filters, params) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null
    // unref() unwraps potential refs
    getItems({
      collection: unref(items),
      params: {
        filters: filters,
        params: params,
      }
    })
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  }
  if (isRef(items)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch()
  }

  return { data, error }
}