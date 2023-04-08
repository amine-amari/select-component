import { useState } from 'react'
import { Select } from './select'

const options = [
  { label: "First", value: 1  },
  { label: "Second", value: 2  },
  { label: "Third", value: 3  },
  { label: "Fourth", value: 4  },
  { label: "Fifth", value: 5  },
]

function App() {

  return (
    <div className="App">
      <Select options={options} />
    </div>
  )
}

export default App
