import React from 'react';
import Grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { withGrapesConfig } from '../../constants';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gjsBasicBlocks from 'grapesjs-blocks-basic';

const withGrapes = (Component) => class WithGrapes extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            editor: null,
            pluginName: [gjsBasicBlocks],
            isLoading: true,
        };
    }
    handleClick(e) {
        e.preventDefault();
        console.log(e.target.innerHTML);
        const bm = this.state.editor.BlockManager;
        const blocks = bm.getAll();
        const blockscategory = bm.getCategories();
        const getContainer = bm.getContainer();
        console.log(getContainer);
        console.log(bm);
        console.log(blocks);
        console.log(blockscategory)
        // Show me just column1 and column2 blocks
        bm.render(blocks.filter(
            block => block.get('category').id === e.target.innerHTML
        ));

        //Render all blocks again
        //bm.render();
    }
    async componentDidMount() {
        const editor = await Grapesjs.init(withGrapesConfig);
        this.setState({ editor, isLoading: false })
        editor.addComponents(Component);
    }
    render() {
        const { editor } = this.state;
        console.log(editor);
        return (
            <>
                <Row className="px-auto row-margin-reset">
                    <Col className="col-padding-reset col-scroll">
                        <div id='blocks' className="blocks d-flex flex-column align-items-center justify-content-center">
                            <div className="my-3 align-self-center">
                                <div className="input-group mt-3">
                                    <select className="custom-select" id="inputGroupSelect04">
                                        <option defaultValue>Search </option>
                                        <option value="1">Basic</option>
                                        <option value="2">BootStrapV4</option>
                                        <option value="3">Inbuilt</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8} className="col-padding-reset">
                        <div id='panels' ></div>
                        <div id='gjs'></div>
                    </Col>
                    <Col className="col-padding-reset col-scroll">
                        <div id='style-manager-container'></div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default withGrapes;