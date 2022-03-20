/**
 * For routes redirects
 *
 * @param path of the link you want the function to redirect to
 */

export const redirect = (path: string): void => {
  window.location.pathname = path
}