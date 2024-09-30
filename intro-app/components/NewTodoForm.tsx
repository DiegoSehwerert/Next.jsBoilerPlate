'use client'

import React, { useState } from 'react'

const NewTodoForm = () => {
  const [state, updateState] = useState('')

  return (
    <form>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewTodoForm
