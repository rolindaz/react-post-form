import { useState, useEffect } from 'react'

function App() {

  const url = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    publish: false
  })

  function addNewPost(e) {
    e.preventDefault()
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4">
          <form onSubmit={addNewPost}>
            {/* Text input for Author */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                value={formData.author}
                name="author"
                id="author"
                aria-describedby="helpId"
                placeholder="Type the name of the author here"
                onChange={(e) => { setFormData({ ...formData, author: e.target.value }) }}
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
                value={formData.title}
                name="title"
                id="title"
                aria-describedby="helpId"
                placeholder="Type the title of the post here"
                onChange={(e) => { setFormData({ ...formData, title: e.target.value }) }}
              />
            </div>
            {/* Textarea input for Body */}
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Post Content
              </label>
              <textarea className="form-control"
                name="body"
                value={formData.body}
                id="body"
                rows="3"
                placeholder='Enter the content of your post here'
                onChange={(e) => { setFormData({ ...formData, body: e.target.value }) }}
              >
              </textarea>
            </div>
            {/* Checkbox input for Publish */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name='publish'
                id="publish"
                onChange={(e) => { setFormData({ ...formData, publish: e.target.checked }) }}
              />
              <label className="form-check-label" htmlFor="publish">
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