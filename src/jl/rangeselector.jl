# AUTO GENERATED FILE - DO NOT EDIT

export rangeselector

"""
    rangeselector(;kwargs...)

A RangeSelector component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `cursor_color` (String; optional): Color of the cursor line.
- `height` (String; optional): Height of the selection area.
- `range` (Array of Reals; optional): Range of the selection.
- `selection_color` (String; optional): Color of the selection area.
- `width` (String; optional): Width of the selection area.
- `xend` (Real; optional): End value of the selection.
- `xstart` (Real; optional): Start value of the selection.
"""
function rangeselector(; kwargs...)
        available_props = Symbol[:id, :cursor_color, :height, :range, :selection_color, :width, :xend, :xstart]
        wild_props = Symbol[]
        return Component("rangeselector", "RangeSelector", "nicks_dash_components", available_props, wild_props; kwargs...)
end

