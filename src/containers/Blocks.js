import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import Block from "../components/Block";

export default class Blocks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blocks, url } = this.props;
    const nodeBlocks = blocks.list.filter(block => block.url === url);
    return nodeBlocks[0].blocks.length > 0 ? (
      <Box paddingTop={3} width={"100%"}>
        {nodeBlocks[0].blocks.map((block) => (
          <Block
            block={block}
            key={block.id}
          />
        ))}
      </Box>
    ) : 'No blocks';
  }
}

Blocks.propTypes = {
  blocks: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
