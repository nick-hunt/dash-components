# AUTO GENERATED FILE - DO NOT EDIT

#' @export
rangeSelector <- function(id=NULL, cursor_color=NULL, height=NULL, range=NULL, selection_color=NULL, width=NULL, xend=NULL, xstart=NULL) {
    
    props <- list(id=id, cursor_color=cursor_color, height=height, range=range, selection_color=selection_color, width=width, xend=xend, xstart=xstart)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RangeSelector',
        namespace = 'nicks_dash_components',
        propNames = c('id', 'cursor_color', 'height', 'range', 'selection_color', 'width', 'xend', 'xstart'),
        package = 'nicksDashComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
