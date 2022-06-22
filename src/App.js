import React, {useState} from 'react';
import CounterFn from './components/counter/CounterFn';
import CounterClass from './components/counter/CounterClass';
import BuyStockFn from './components/buyStock/BuyStockFu';
import BuyStockClass from './components/buyStock/BuyStockClass';
import CounterNumber from './components/counter/CounterNumber';
import BuyStockNumber from "./components/buyStock/BuyStockNumber";

import "./App.css"

const pageInfo = [
  {
    pageName: "CounterClass",
    pageComponent: CounterClass
  },
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState(pageInfo[1])


  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo)
  }

  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent
    return <CurPage />
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App__header__nav">
            {pageInfo.map((page,id) => {
              switch (page.pageName) {
                case "CounterClass":
                  return <a key={id} onClick={() => hanldeChangePage(page)} >{page.pageName} <CounterNumber /></a>
                case "BuyStockClass":
                  return <a key={id} onClick={() => hanldeChangePage(page)} >{page.pageName} <BuyStockNumber /></a>
                default:
                  return <a key={id} onClick={() => hanldeChangePage(page)} >{page.pageName}</a>
              }
            })}
        </nav>

        {
        renderCurrentPage()
        }
      </header>

    </div>
  );
}

export default App;
