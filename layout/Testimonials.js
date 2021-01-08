
import Link from 'next/link'

export default function Testimonials() {
   return (

      <section className="testimonials container">
         <h3 className="testimonials__title">What they’ve said</h3>
         <div className="testimonials__grid">
            <article className="testimonials__card">
               <div className="testimonials__media">
                  <img src="/avatar-anisha.png" alt="" className="testimonials__image" />
               </div>
               <span className="testimonials__name">Anisha Li</span>
               <p className="testimonials__description description">“Manage has supercharged our team’s workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone motivated.”</p>
            </article>

            <article className="testimonials__card">
               <div className="testimonials__media">
                  <img src="/avatar-ali.png" alt="" className="testimonials__image" />
               </div>
               <span className="testimonials__name">Ali Bravo</span>
               <p className="testimonials__description description">“We have been able to cancel so many other subscriptions since using
               Manage. There is no more cross-channel confusion and everyone is much
            more focused.”</p>
            </article>

            <article className="testimonials__card">
               <div className="testimonials__media">
                  <img src="/avatar-richard.png" alt="" className="testimonials__image" />
               </div>
               <span className="testimonials__name">Richard Watts</span>
               <p className="testimonials__description description">“Manage allows us to provide structure and process. It keeps us organized
            and focused. I can’t stop recommending them to everyone I talk to!”</p>
            </article>
         </div>
         <div className="testimonials__footer">
            <Link href="/">
               <a className="testimonials__link">Get Started</a>
            </Link>
         </div>
      </section>
   )
}
