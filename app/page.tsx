import AboutSection from '@/components/AboutSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import ProjectSection from '@/components/ProjectSection';
import SelectedPublicationsSection from '@/components/SelectedPublicationsSection';
import PersonalAsideMd from '@/data/home/PersonalAside.mdx';
import bibtex from '@/data/publications/Publications.bib';
import { homepageSection } from '@/data/website.config';

export default function Page() {
  return (
    <main className='md:w-[40rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.NewsSection && <LatestNewsSection />}
      {homepageSection.AboutSection && (
        <article className='prose max-w-none flex flex-col gap-2 text-pretty'>
          <PersonalAsideMd />
        </article>
      )}
      {homepageSection.SelectedPublicationsSection && (
        <SelectedPublicationsSection bibtex={bibtex} />
      )}
      {homepageSection.ProjectSection && (
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <ProjectSection />
        </div>
      )}
    </main>
  );
}
