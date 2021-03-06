import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import { Nodes } from "./Nodes";
import Node from "../components/Node";


describe("<Nodes />", () => {
  const actions = {
    checkNodeStatuses: jest.fn(),
  };

  const blocksActions = {
    checkBlocksStatuses: jest.fn(),
  }

  const nodes = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      }
    ]
  };

  const blocks = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        blocks: [],
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        blocks: [],
        loading: false
      }
    ]
  };

  const state = { ...blocks, ...nodes };

  it("should contain <Node />", () => {
    const wrapper = shallow(
      <Nodes
        actions={actions}
        nodes={state}
        blocksActions={blocksActions}
        blocks={blocks}
      />
    );

    expect(wrapper.find(Node).length).toEqual(2);
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({state});
    const component = create(
      <Provider store={store}>
        <Nodes
          actions={actions}
          nodes={state}
          blocksActions={blocksActions}
          blocks={blocks}
        />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
