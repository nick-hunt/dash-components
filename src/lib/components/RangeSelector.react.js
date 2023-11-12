import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class RangeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range_min_px: 0,
            range_max_px: 0,
        };
    }
    componentDidMount() {
        const { range_min_px, range_max_px } = this.state;
        this.setState({
            range_min_px: this.scaleValueToPixels(range_min_px),
            range_max_px: this.scaleValueToPixels(range_max_px),
        })
    }
    startSelection = (e) => {
        const { isSelecting, setProps } = this.props;
        // const xstart = e.clientX;
        const xstart = Math.max(e.clientX - e.target.offsetLeft, 0);
        const xend = xstart;
        if (isSelecting !== true) {
            setProps({ isSelecting: true, xstart, xend });
        }
    }

    updateSelection = (e) => {
        const { isSelecting, setProps } = this.props;
        this.updateCursorLine(e);
        if (isSelecting) {
            // const xend = e.clientX;
            const xend = Math.max(e.clientX - e.target.offsetLeft, 0);
            setProps({ xend });
        }
    }

    endSelection = (e) => {
        const { isSelecting, xstart, xend, setProps } = this.props;
        if (isSelecting && xstart !== xend) {
            setProps({ xstart, xend, range: [xstart, xend] });
        }
        setProps({ isSelecting: false });
    }

    updateCursorLine = (e) => {
        const { setProps } = this.props;
        setProps({ cursorX: e.clientX - e.target.offsetLeft -1});
    }
    showCursorLine = () => {
        const { setProps } = this.props;
        setProps({ isCursorLineVisible: true });
    }
    hideCursorLine = () => {
        const { setProps } = this.props;
        setProps({ isCursorLineVisible: false });
    }
    selectWholeRange = (e) => {
        const { setProps } = this.props;
        const xstart = 0;
        const xend = e.target.offsetWidth-2;
        setProps({ xstart, xend, range: [xstart, xend] });
    }
    // scalePixelsToValue = (pixels) => {
    //     const { width, min, max } = this.props;
    //     return (pixels * (max - min)) / width;
    // }
    // scaleValueToPixels = (value) => {
    //     const { width, min, max } = this.props;
    //     return (value * width) / (max - min);
    // }

    render() {
        const {
            id,
            xstart,
            xend,
            cursorX,
            isCursorLineVisible,
            selection_color,
            cursor_color,
            setProps
        } = this.props;

        return (
            <div id={id}>
                <div
                    className="horizontal-selection"
                    onMouseDown={this.startSelection}
                    onMouseMove={this.updateSelection}
                    onMouseUp={this.endSelection}
                    onMouseEnter={this.showCursorLine}
                    onMouseLeave={this.hideCursorLine}
                    onDoubleClick={this.selectWholeRange}
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                    }}
                >
                    <div
                        className="selected-area"
                        style={{
                            left: Math.min(xstart, xend),
                            width: Math.abs(xend - xstart),
                            backgroundColor: selection_color,
                        }}
                    >
                    </div>
                    <div
                        className="cursor-line"
                        style={{
                            left: cursorX,
                            display: isCursorLineVisible ? 'block' : 'none',
                            backgroundColor: cursor_color,
                        }}
                    >
                    </div>
                </div>
            </div>
        );
    }
}

RangeSelector.defaultProps = {
    xstart: 0,
    xend: 0,
    range: [0, 0],
    width: '300px',
    height: '100px',
    selection_color: 'rgba(0, 128, 255, 0.5)', //rgba(0, 128, 255, 0.5),
    cursor_color: 'red',
    // future props
    // snap_to_ticks: false,
    //min: 0,
    //max: 100,
};

RangeSelector.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Start value of the selection.
     */
    xstart: PropTypes.number,

    /**
     * End value of the selection.
     */
    xend: PropTypes.number,

    /**
     * Range of the selection.
     */
    range: PropTypes.arrayOf(PropTypes.number),

    /**
     * Width of the selection area.
     */
    width: PropTypes.string,

    /**
     * Height of the selection area.
     */
    height: PropTypes.string,

    /**
     * Color of the selection area.
     */
    selection_color: PropTypes.string,

    /**
     * Color of the cursor line.
     */
    cursor_color: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    
    
};
