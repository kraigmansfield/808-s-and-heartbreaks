import React from 'react';

export default function ProBuilder() {

    const handleSubmit = (event) => {
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
        if (document.querySelector("#liked-R&B").checked){
        // add pop's id to the array
        likedids.push(5)
        }
        if (document.querySelector("#liked-Funk").checked){
        // add pop's id to the array
        likedids.push(6)
        }
        if (document.querySelector("#disliked-Pop").checked){
          // add pop's id to the array
          likedids.push(1)
      }
      if (document.querySelector("#disliked-Hip-Hop").checked){
        // add pop's id to the array
        likedids.push(2)
      }
      if (document.querySelector("#disliked-Rock").checked){
      // add pop's id to the array
      likedids.push(3)
      }
      if (document.querySelector("#disliked-Country").checked){
      // add pop's id to the array
      likedids.push(4)
      }
      if (document.querySelector("#disliked-R&B").checked){
      // add pop's id to the array
      likedids.push(5)
      }
      if (document.querySelector("#disliked-Funk").checked){
      // add pop's id to the array
      likedids.push(6)
      }
        //fetch request for adding liked genres
        //fetch request for adding disliked genres
      
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
          <input type="radio" name="likedGenre" id="liked-R&B" value="R&B" />
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
          <input type="radio" name="dislikedGenre" id="disliked-R&B" value="R&B" />
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

        // <div>
        //     <div classname="container">
        //         <form onSubmit={handleSubmit}>

        //             <h2>Please select genres you like!</h2>
        //             <select className="liked-container">
        //                 <option value="Pop">POP</option>
        //                 <option value="Hip-Hop">Hip-Hop</option>
        //                 <option value="Rock">Rock</option>
        //                 <option value="Country">Country</option>
        //                 <option value="R&B">R&B</option>
        //                 <option value="Funk">Funk</option>
        //             </select>



        //             <h2>Please select genres you dislike!</h2>
        //             <radio className="disliked-container">
        //                 <option value="Pop">POP</option>
        //                 <option value="Hip-Hop">Hip-Hop</option>
        //                 <option value="Rock">Rock</option>
        //                 <option value="Country">Country</option>
        //                 <option value="R&B">R&B</option>
        //                 <option value="Funk">Funk</option>
        //             </radio>
        //             <button type='submit'>Submit</button>
        //         </form>
        //     </div>
        // </div>


    )

}


