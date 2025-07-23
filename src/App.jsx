import { useState } from 'react'

function App() {

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4">
          <form>
            {/* Text input for Author */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                value=''
                name="author"
                id="author"
                aria-describedby="helpId"
                placeholder="Type the name of the author here"
              />
            </div>
            {/* Text input for Title */}
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                value=''
                name="title"
                id="title"
                aria-describedby="helpId"
                placeholder="Type the title of the post here"
              />
            </div>
            {/* Textarea input for Body */}
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Post Content
              </label>
              <textarea className="form-control"
                name="body"
                value=''
                id="body"
                rows="3"
                placeholder='Enter the content of your post here'
              >
              </textarea>
            </div>
            {/* Checkbox input for Public */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name='public'
                id="public"
              />
              <label className="form-check-label" htmlFor="public">
                Publish this post?
              </label>
            </div>
            <button className='btn btn-primary mt-3' type="submit">
              Add New Post
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App