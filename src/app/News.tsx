import React from 'react'
import "../styles/news.css"

const News = () => {
  return (
    <div className='News scrollAnim'>
      <h1 className="text-3xl">IIIT - L in the News</h1>
      <div className="newCont">
        <div className="leftBox"></div>
        <div className="rightBoxCont">
          <div className="newsBoxes"></div>
          <div className="newsBoxes"></div>
          <div className="newsBoxes"></div>
        </div>
      </div>
      <h1 className="text-3xl mb-12">Public Announcements</h1>
      <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laboriosam esse inventore incidunt suscipit ipsum placeat maiores fugit voluptatem magni iusto consequuntur, accusamus amet quos deserunt, eaque consequatur atque! Nihil ducimus nemo quo quos doloribus dignissimos accusamus eum architecto facilis dolores nesciunt consequatur molestiae dicta aspernatur eius, magnam ab vel voluptatum autem aut ipsa, facere officia optio! Voluptatibus nihil alias repudiandae suscipit deleniti esse repellat quidem vel officiis iste.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, odio? Quam consequatur eos nostrum pariatur voluptatem? Placeat vero quam eligendi, nemo quisquam voluptatibus nisi temporibus, quidem minus mollitia eius alias atque nam sapiente incidunt tempora quaerat impedit non id, quia veniam dolore libero. Excepturi id corrupti, quam porro magnam rem culpa assumenda non reiciendis. Tempore voluptatem exercitationem, iusto recusandae iste dolorem. Dolores tenetur asperiores, aliquam explicabo ullam perspiciatis a.
      </div>
    </div>
  )
}

export default News
