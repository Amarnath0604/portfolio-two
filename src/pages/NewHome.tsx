import TimeLine_01 from '@/components/release-time-line';
import FlowArt, { FlowSection } from '../components/story-scroll';
import AboutMeSummary from './MySummary';
import { MyProjects } from './MyProjects';
import { AppFooter } from '@/components/app-footer';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Présentation Flow Art">
      <FlowSection aria-label="Qui nous sommes" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who am I</p>
        <hr className="my-[1vw] border-none border-t border-black opacity-100" />
        <div>
          <h1
            className="text-[clamp(3.3rem,12vw,14rem)] font-bold leading-[0.95] uppercase tracking-tight"
          >
            Hey,
            <br />
            This is Amar !
            <br />
          </h1>
        </div>
        <hr className="my-[1vw] border-none border-t border-black opacity-100" />
        <p className="mt-auto text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          <AboutMeSummary></AboutMeSummary>
        </p>
      </FlowSection>

      <FlowSection aria-label="La mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — What I do</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            As a
            <br />
            Frontend 
            <br />
            Developer
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          I build responsive, user-centric web experiences using React.js and modern web technologies. From dynamic dashboards to scalable frontend systems. 
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">React Dev</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Crafting scalable, reusable UI components and feature-rich applications with React.js
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Dashboard & Analytics</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Building real-time analytics dashboards with dynamic charts powered by live API data.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">WordPress & E-commerce</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Developing and maintaining WordPress sites with WooCommerce, plugins, and custom integrations.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Security & Auth</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Implementing two-factor authentication, access tokens, and website security hardening measures.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">ADA Accessibility</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Ensuring websites meet ADA Level 2 compliance standards for an inclusive user experience.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Deployment & Hosting</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Managing deployments on Netlify, Bitbucket, and servers with SSL, DNS, and hosting configuration.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Every feature we build starts with one question — does this serve the user?
        </p>
      </FlowSection>

      <FlowSection aria-label="Comment ça marche" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Work Experience</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Show Up &
            <br />
            Stand Out.
          </h2>
        </div>
        <TimeLine_01></TimeLine_01>
        <hr className="my-[3vw] border-none border-t border-black/60" />
      </FlowSection>

      <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Projects I did</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Projects
            <br />
            Across
            <br />
            Journey
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="text-center">
        <MyProjects></MyProjects>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
      </FlowSection>

      <FlowSection aria-label="Nous rejoindre" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Join us</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Ready
            <br />
            To
            <br />
            Begin?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Catch up with me to build something stronger and smarter.
        </p>
        <AppFooter />
      </FlowSection>
    </FlowArt>
  );
}
