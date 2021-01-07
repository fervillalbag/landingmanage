
import Button from "../components/Button"

export default function About() {
   return (
      <section className="about">
         <div className="container">
            <div className="about__left">
               <h3 className="about__title">What’s different about Manage?</h3>
               <p className="about__description description">Manage provides all the functionality your team needs, without
               the complexity. Our software is tailor-made for modern digital
               product teams.</p>
            </div>
            <div className="about__right">
               <article className="about__item">
                  <div className="about__number">
                     <Button>
                        01
                     </Button>
                  </div>
                  <h4 className="about__subtitle">
                     Track company-wide progress
                  </h4>
                  <p className="about__detail description">
                     See how your day-to-day tasks fit into the wider vision. Go from
                     tracking progress at the milestone level all the way done to the
                     smallest of details. Never lose sight of the bigger picture again.
                  </p>
               </article>
               <article className="about__item">
                  <div className="about__number">
                     <Button>
                        02
                     </Button>
                  </div>
                  <h4 className="about__subtitle">
                     Advanced built-in reports
                  </h4>
                  <p className="about__detail description">
                     Set internal delivery estimates and track progress toward company
                     goals. Our customisable dashboard helps you build out the reports
                     you need to keep key stakeholders informed.
                  </p>
               </article>
               <article className="about__item">
                  <div className="about__number">
                     <Button>
                        03
                     </Button>
                  </div>
                  <h4 className="about__subtitle">
                     Everything you need in one place
                  </h4>
                  <p className="about__detail description">
                     Stop jumping from one service to another to communicate, store files,
                     track tasks and share documents. Manage offers an all-in-one team
                     productivity solution.
                  </p>
               </article>
            </div>
         </div>
      </section>
   )
}
