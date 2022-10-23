import ErrorHandler from "../components/ErrorHandler"

export const cleanPage = ($element: Element | null): Error | void => {
    if (!$element) return ErrorHandler({ type: "nullDOMelement" }) as Error
    $element.innerHTML = ''
}