import nicks_dash_components
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    nicks_dash_components.RangeSelector(
        id='input',
        width='500px',
        height='50px',
        selection_color='gray',
        cursor_color='white',

    ),
    html.Div(id='output')
])


@callback(
        Output('output', 'children'),
        Input('input', 'range'),
        prevent_initial_call=True)
def display_output(range):
    return (
        html.P('Start: {}'.format(range[0])),
        html.P('End: {}'.format(range[1])),
    )


if __name__ == '__main__':
    app.run_server(debug=True)
