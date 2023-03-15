import React from 'react';

export default function ProBuilder({userId}) {

    const handleSubmit = async (event) => {
        event.preventDefault();
        // form submission logic here
        //create empty array for liked ids 
        const likedids= []
        //create an empty array for disliked ids
        const dislikedids= []
        //check each button if its checked then add the id to the array if not don't do anything

        if (document.querySelector("#liked-Pop").checked){
            // add pop's id to the array
            likedids.push(1)
        }
        if (document.querySelector("#liked-Hip-Hop").checked){
            // add pop's id to the array
            likedids.push(2)
        }
        if (document.querySelector("#liked-Rock").checked){
            // add pop's id to the array
            likedids.push(3)
        }
        if (document.querySelector("#liked-Country").checked){
            // add pop's id to the array
            likedids.push(4)
        }
        if (document.querySelector("#liked-R-B").checked){
            // add pop's id to the array
            likedids.push(5)
        }
        if (document.querySelector("#liked-Funk").checked){
            // add pop's id to the array
            likedids.push(6)
        }
        if (document.querySelector("#disliked-Pop").checked){
            // add pop's id to the array
            dislikedids.push(1)
      }
      if (document.querySelector("#disliked-Hip-Hop").checked){
            // add pop's id to the array
            dislikedids.push(2)
      }
      if (document.querySelector("#disliked-Rock").checked){
            // add pop's id to the array
            dislikedids.push(3)
      }
      if (document.querySelector("#disliked-Country").checked){
            // add pop's id to the array
            dislikedids.push(4)
      }
      if (document.querySelector("#disliked-R-B").checked){
           // add pop's id to the array
            dislikedids.push(5)
      }
      if (document.querySelector("#disliked-Funk").checked){
           // add pop's id to the array
            dislikedids.push(6)
      }
        //fetch request for adding liked genres
        // make the fetch request
    const response = await fetch('http://localhost:3001/api/users/submit-form', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          likedGenres: likedids,
          dislikedGenres: dislikedids,
          userId: userId

      })
  });

  // handle the response
  if (response.ok) {
    window.location.href="https://accounts.spotify.com/en/authorize?response_type=code&client_id=58c1f7a4b93d4ec4bb374290cccbc543&scope=user-read-private%20user-read-email%20user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fspotify%2Fcallback"
      // the request was successful
      console.log('Liked genres added successfully');
      
  } else {
      // there was an error
      console.log('Error adding liked genres');
  }
  //       fetch request for adding disliked genres
      
    };

    return (
        <div>
  <div className="container">
    <form onSubmit={handleSubmit}>
    <h2>Please select genres you like!</h2>
      <div className="liked-container">
        <label>
          <input type="radio" name="likedGenre" id="liked-Pop" value="Pop" />
          Pop
        </label>
        <label>
          <input type="radio" name="likedGenre" id="liked-Hip-Hop" value="Hip-Hop" />
          Hip-Hop
        </label>
        <label>
          <input type="radio" name="likedGenre" id="liked-Rock" value="Rock" />
          Rock
        </label>
        <label>
          <input type="radio" name="likedGenre" id="liked-Country" value="Country" />
          Country
        </label>
        <label>
          <input type="radio" name="likedGenre" id="liked-R-B" value="R&B" />
          R&B
        </label>
        <label>
          <input type="radio" name="likedGenre" id="liked-Funk" value="Funk" />
          Funk
        </label>
      </div>

      <h2>Please select genres you dislike!</h2>
      <div className="disliked-container">
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-Pop" value="Pop" />
          Pop
        </label>
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-Hip-Hop" value="Hip-Hop" />
          Hip-Hop
        </label>
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-Rock" value="Rock" />
          Rock
        </label>
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-Country" value="Country" />
          Country
        </label>
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-R-B" value="R&B" />
          R&B
        </label>
        <label>
          <input type="radio" name="dislikedGenre" id="disliked-Funk" value="Funk" />
          Funk
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>
    )

}
