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
          I am an undergraduate at Queen's University studying Applied Mathematics & Computer Engineering. I am interested in researching, developing, and harnessing machine intelligence to empower humanity in the 21st century. In the summer of 2024, I worked on multimodal LLMs for human understanding at the <a href="https://www.aiimlab.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Aiim Lab</a> under the supervision of <a href="https://pritamsarkar.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Pritam Sarkar</a> and Professor <a href="https://smithengineering.queensu.ca/directory/faculty/ali-etemad" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Ali Etemad</a>. This year, I am an AI/ML Engineer at <a href="https://rosalindcap.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Rosalind Advisors</a>, a biotech hedge fund based in Toronto. I am also a visiting Research Assistant at UofT's <a href="https://csslab.cs.toronto.edu/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Computational Social Science Lab</a> under the supervision of Professor <a href="https://www.cs.toronto.edu/~ashton/" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-70">Ashton Anderson</a>.
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