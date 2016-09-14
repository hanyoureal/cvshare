import _ from 'lodash';
import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

// TODO: load with redux saga from server
import { democv, REL } from '../../../src/json/cv.demo';

const Body = () => {
  const { ...cv } = democv;
  const scale = 5;

  applyScaleToLayout(democv, scale);

  return (
    <div>
      <Paper className='cv-paper' style={democv.style.layout} zDepth={2}>
        {
          parseAndDrawElements(democv)
        }
      </Paper>
    </div>
  )
};

export default Body;

function parseAndDrawElements(cv) {
  const arr = [];
  const keys = Object.keys(cv);

  keys.map((k, i) => {
    const rel = cv[k]['_rel'] || false;
    const key = k;
    const displayKey = key.split('_').join(' ');
    const val = cv[k]['val'] ? cv[k]['val'] : cv[k];
    const stringVal = JSON.stringify(val);

    if (!rel) {
      arr.push(<ListItem disabled={false} key={Math.random()}>{
        typeof val !== 'object' && typeof val !== 'array' ?
          val : parseAndDrawElements(val)
      }</ListItem>);
    } else if (rel === REL.header) {
      arr.push(<span className={rel} key={Math.random()}>{
        typeof val !== 'object' && typeof val !== 'array' ?
          val : parseAndDrawElements(val)
      }</span>);
    } else if (rel === REL.ltxt) {
      arr.push(<span className={rel} key={Math.random()}>{
        typeof val !== 'object' && typeof val !== 'array' ?
          displayKey + ': ' + val : parseAndDrawElements(val)
      }</span>);
    } else if (rel === REL.mtxt) {
      arr.push(<span className={rel} key={Math.random()}>{
        typeof val !== 'object' && typeof val !== 'array' ?
          displayKey + ': ' + val : parseAndDrawElements(val)
      }</span>);
    } else if (rel === REL.stxt) {
      arr.push(<p className={rel} key={Math.random()}>{
        typeof val !== 'object' && typeof val !== 'array' ?
          displayKey + ': ' + val : parseAndDrawElements(val)
      }</p>);
    } else if (rel === REL.hlist) {
      arr.push(
        <span key={Math.random()}>
          <p className={rel}>{displayKey}:</p>
          <List className={rel} key={Math.random()}>
          {
            parseAndDrawElements(val)
          }
        </List>
      </span>);
    } else if (rel === REL.vlist) {
      arr.push(
        <span key={Math.random()}>
          <p className={rel}>{displayKey}:</p>
          <List className={rel} key={Math.random()}>
          {
            parseAndDrawElements(val)
          }
        </List>
      </span>);
    } else if (rel === REL.img) {
      arr.push(<Avatar className={rel} key={Math.random()} src={val} />);
    } else if (rel === REL.period) {
      arr.push(
        <div key={Math.random()}>
          <p key={Math.random()}>
            <span key={Math.random()}>Start:</span>
            {val.start}
          </p>
          <p key={Math.random()}>
            <span key={Math.random()}>End:</span>
            {val.end}
          </p>
        </div>
      );
    }
  });

  return (
    <span key={keys.join('-')}>
      {
        arr
      }
    </span>
  );
}

//   }
// }

function applyScaleToLayout(cv, scale) {
  let layout = cv.style.layout;
  const layoutKeys = Object.keys(layout);

  for (let i = layoutKeys.length; i--; i >= 0) {
    if (typeof layout[layoutKeys[i]] === 'number')
      layout[layoutKeys[i]] = layout[layoutKeys[i]] * scale;
  }
}
