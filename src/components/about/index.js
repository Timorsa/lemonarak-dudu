import React from 'react'
import ScrollReveal from 'scrollreveal'

const About = () => {

    window.sr = ScrollReveal();
    window.sr.reveal('.scroll-effect', {
        origin: 'left',
        duration: 1000,
        distance: '35rem',
        delay: 600,
        
    });

    return (
        <section className="about">
            <div className="content" dir='rtl'>
                <h2 className="name-1 scroll-effect">לימונערק דודו</h2>
                <h2 className="name-2 scroll-effect">LEMONARAK DUDU</h2>
                <h3 className="item-desc scroll-effect">ערק בתוספת מיץ לימונים טבעי, ישראל, 16% אלכוהול, כשר.</h3>
                <p className="scroll-effect">
                    משקה אניס בסגנון ים תיכוני, קליל, קיצי ומתאים לחך הישראלי.
                    מופק מתזקיק ענבים איכותי מתובל בזרעי אניס, בתוספת מיץ לימונים טרי טבעי הנסחט מזן הוילה-פרנקה
                  
                    (VILLAFRANCA LEMON).
                </p>
                <p className="scroll-effect">
                    לימונענע דודו מתאפיין בקלילות ואיזון בין טעם אניס לבין מיץ הלימונים.
                    באף נחוש ניחוח הדרי ופרחי אניס.
                    בפה נחוש יובש של ערק איכותי, חמיצות לימונית וחתיכות לימון שנותרו לאחר סחיטה.
                    בעל סיומת מרעננת.
                </p>
                <div className="about-logo scroll-effect"></div>
            </div>

        </section>
    )
}

export default About
