import IconBar from '@/components/molecules/IconBar';

const PostPage = () => {
  return (
    <div className="flex w-full flex-col items-center py-16">
      <div className="flex w-full flex-col gap-4 p-4 md:items-center md:p-0 md:pt-4">
        <h1 className="w-full max-w-[700px] text-4xl">
          Seth Grief-Albert
          <p className="inline font-light text-u-300">
            – About
          </p>
        </h1>
        <p className="w-full max-w-[700px] font-light">
          Undergraduate at Queen's University
        </p>
        <IconBar className="!mb-1" />
        <figure className="w-full max-w-[700px]">
          <img src="/bell.png" className="w-full" />
          <figcaption className="text-sm text-gray-500 mt-3">
            Bell Telephone Laboratories | May 1942
          </figcaption>
          <div className="p-2"></div>
        </figure>
      </div>
    </div>
  );
};

export default PostPage;