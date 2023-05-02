import React from 'react';
import { Graph } from 'react-d3-graph';

const data = {
    nodes: [
        { id: 'Parent 1', color: 'red' },
        { id: 'Parent 2', color: 'blue' },
        { id: 'Child 1', color: 'green' },
        { id: 'Child 2', color: 'yellow' },
        { id: 'Child 3', color: 'orange' },
    ],
    links: [
        { source: 'Parent 1', target: 'Child 1' },
        { source: 'Parent 1', target: 'Child 2' },
        { source: 'Parent 2', target: 'Child 2' },
        { source: 'Parent 2', target: 'Child 3' },
        { source: 'Parent 2', target: 'Parent 1' },
    ],
    focusedNodeId: "nodeIdToTriggerZoomAnimation"
};

const FamilyTreeGraph = () => {

    const myConfig = {
        nodeHighlightBehavior: true,
        directed: true,

        d3: {linkLength : 200},
        node: {
            color: 'lightgreen',
            size: 120,
            highlightStrokeColor: 'blue',
        },
        link: {
            highlightColor: 'lightblue',

        },
    };

    return (
        <div style={{ height: '500px', width: '90%' }}>
            <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={data}
                config={myConfig}
            />
        </div>
    );
};

export default FamilyTreeGraph;
