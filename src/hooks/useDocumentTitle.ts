import { useRef, useEffect } from "react"

export const useDocumentTitle = (title: string, isPrevailOnUnmount: boolean = false) => {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [ title ])

  useEffect(() => () => {
    if (!isPrevailOnUnmount) {
      document.title = defaultTitle.current
    }
  }, [])
}