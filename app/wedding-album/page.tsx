import { AlbumGallery } from "./_components/AlbumGallery";
import { albumImageSrcPath, getAlbumImageFilenames } from "./_lib/getAlbumImages";

export default function WeddingAlbumPage() {
  const names = getAlbumImageFilenames();
  const imagePaths = names.map(albumImageSrcPath);

  if (imagePaths.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f] px-6 text-center text-white/70">
        <p>No images found in the wedding album folder.</p>
      </div>
    );
  }

  return <AlbumGallery imagePaths={imagePaths} />;
}
