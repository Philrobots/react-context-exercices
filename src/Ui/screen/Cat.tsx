import React from 'react'
import { limit } from "../api/limit";
import useCats from "../../Core/hooks/useCats"
import { useCatProvider } from "../../Core/hooks/useCatProvider";

export default function Cat() {

  const paginationType = useCatProvider();
  const { cats, loading } = useCats(paginationType?.page!);

  const next = () => {
    paginationType?.toggle(prevPage => prevPage + 1);
  }

  const previous = () => {
    paginationType?.toggle(prevPage => prevPage - 1);
  };

  const hasMoreCat = () => cats.length >= limit;

  const isFirstPage = (paginationType: { page: number; toggle: React.Dispatch<React.SetStateAction<number>>; } | undefined) => paginationType?.page! > 0

  if (loading) {
    return (<div>
      <h1> Loading ...</h1>
    </div>)
  }

  return (
    <div>
      <div style={{
        display: "flex", flexDirection: 'row', flexWrap: "wrap"
      }}>
        {
          cats.map((cat) => (
            <img
              style={{
                height: 180,
                width: 180,
                marginTop: 1.5,
                borderRadius: 7,
                margin: 50
              }}
              src={cat.url} />
          ))
        }
      </div >

      <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
        {
          isFirstPage(paginationType) && <button onClick={previous} style={{ margin: 10, width: 100 }}>
            Previous
          </button>
        }
        {
          hasMoreCat() && <button onClick={next} style={{ margin: 10, width: 100 }}>
            Next
          </button>
        }

      </div>
    </div>
  )
}


