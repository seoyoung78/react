import React from 'react';
import './App.css';
import '../src/init';
import LUXButton from "luna-rocket/LUXButton";
import members from './members';
import prscCodeGrid from './grid/grid';
import { Grid, GridInst, useGrid } from './utils/Hooks/useGrid';
import { useEffect } from 'react';
import { GridFitStyle, SelectionStyle } from 'realgrid';

function App() {
  const mainGrid = useGrid();

  // 그리드 설정
  const gridSetting = ({ grid, view, provider } : GridInst) => {
    grid.bindData(members);
    // 순번 제거
    view.setRowIndicator({visible:false});
    // 풋터 제거
    view.setFooters({visible:false});
    // 상태바 제거
    view.setStateBar({visible: false});
    // 체크바 제거
    view.setCheckBar({ visible: false });
    // 그리드 화면에 가득 채우기(width)
    view.setOptions({
      display: {
        fitStyle: GridFitStyle.EVEN_FILL,
        rowHeight: 50,
      },
    })
    // 정렬 제거
    view.sortingOptions.enabled = false;
    view.displayOptions.selectionStyle = SelectionStyle.SINGLE_ROW;
  };

  useEffect(() => {
    mainGrid.handler(gridSetting);
  }, []);

  return (
    <div className="App" style={{ height: '500px' }}>
      <LUXButton type="confirm" label="Confirm Blue" blue={true}/>
      <Grid ref={mainGrid.gridRef} gridSetting={prscCodeGrid}/>
    </div>
  );
}

export default App;
