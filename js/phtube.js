const loadVideos = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
  const data = await res.json();
  const videos = data.data;
  // console.log(videos);
  displayVideos(videos);
}

const videoContainer = document.getElementById('videos-container')

const displayVideos = videos => {
  // console.log(videos)
  videos.forEach(video => {
    console.log(video)
    // create a div
    const videoCard = document.createElement('div')
    videoCard.classList = `card w-96 bg-base-100 shadow-xl`
    videoCard.innerHTML = `
        <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">
                          <div class="badge badge-secondary">NEW</div>
                        Shoes!
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div> 
                        <div class="badge badge-outline">Products</div>
                      </div>
                    </div>
        `;
        videoContainer.appendChild(videoCard);

  });

}

loadVideos();