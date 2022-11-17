const pictureContainer = document.querySelector('.pictures');
const picturesTemlpate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (usersPhotos) =>{
  const pictureContainerFragment = document.createDocumentFragment();

  usersPhotos.forEach((photo) => {
    const userPhotoElement = picturesTemlpate.cloneNode(true);
    userPhotoElement.querySelector('.picture__img').src = photo.url;
    userPhotoElement.querySelector('.picture__likes').textContent = photo.likes;
    userPhotoElement.querySelector('.picture__comments').textContent = photo.comments;

    pictureContainerFragment.appendChild(userPhotoElement);

  });
  pictureContainer.appendChild(pictureContainerFragment);
};
export {renderPhotos};
