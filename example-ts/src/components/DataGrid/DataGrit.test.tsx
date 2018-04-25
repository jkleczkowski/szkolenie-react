import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DataGridComponent from './index';

test('DataGrid should display 2 rows', () => {
  const data = [{ title: 'tomato' }, { title: 'potatoes' }];
  const config = [{ key: 'title' }];
  function onRemove(id) { }
  const dg = renderer.create(<DataGridComponent data={data} config={config} onRemove={onRemove} />)
  const tree = dg.toJSON();
  const table = tree.children[0];
  const rows = table.children[1].children;
  expect(rows.length).toBe(2);
  console.log('rows', rows.length);
})