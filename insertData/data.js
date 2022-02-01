function Trainee(_name, _category, _questions) {
    this.name = _name;
    this.category =
        [{
            body: _category[0],
            nutrition: _category[1],
            community: _category[2],
            values: _category[3],
            spirit: _category[4],
            idenity: _category[5]
        }]
    this.questions = [{
        _questions
    }]
};

questions = [
    {
        category: "Body",
        idNumber: 0,
        question: "עד כמה חשוב לך להתמיד מידי יום בפעילות גופנית?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 1,
        question: "עד כמה נוכחים סיגריות, אלכוהול או סמים בחיים שלך נכון להיום?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 2,
        question: "עד כמה חשוב, לדעתך, לבדוק את מדדי הדם שלך בכל כמה חודשים?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 3,
        question: "כמה שעות בממוצע אני נוטה לישון בלילה?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 4,
        question: "עד כמה אני חש/ה כאב ביום יום בתנועה שלי?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 5,
        question: "עד כמה אני מרגיש/ה שהגיל הביולוגי שלי תואם לגיל הגופני שלי? (גיל מטבולי מול גיל ביולוגי)",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 6,
        question: "עד כמה אני מודע/ת לתפקידם וחשיבותם של שרירי הליבה?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 7,
        question: "עד כמה אני קשוב/ה לצרכים של הגוף שלי נכון להיום?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 8,
        question: "האם את/ה מסוגל/ת לבצע מתח ואם כן אז כמה חזרות רצוף ?",
        openInput: false
    },
    {
        category: "Body",
        idNumber: 9,
        question: "עד כמה, לדעתי, הגוף שלי גמיש נכון להיום ? (יכולת לבצע דיפ סקוואט, גשר, שפאגט, קיפול)?",
        openInput: false
    },
    {
        category: "Nutrition",
        idNumber: 0,
        question: "עד כמה אני מרגיש/ה שיש לי ידע רחב לגבי תזונה נכון להיום?",
        openInput: false
    },
    {
        category: "Nutrition",
        idNumber: 1,
        question: "עד כמה אני מקפיד/ה על שתיית מים ביום יום שלי?",
        openInput: false
    },
    {
        category: "Nutrition",
        idNumber: 2,
        question: "עד כמה חשוב לי להימנע מצריכת סוכר מעובד או סוכר לבן?",
        openInput: false
        ,
    },
    {
        category: "Nutrition",
        idNumber: 3,
        question: "עד כמה חשוב לי לצרוך מזונות שקרובים לטבע?",
        openInput: false
        ,
    },
    {
        category: "Nutrition",
        idNumber: 4,
        question: "אני נוטה להפסיק לאכול ברגע שאני חש/ה שובע?",
        openInput: false
        ,
    },
    {
        category: "Nutrition",
        idNumber: 5,
        question: "עד כמה אני מרגיש/ה שהאכילה שלי היא אכילה רגשית?",
        openInput: false
        ,
    },
    {
        category: "Nutrition",
        idNumber: 6,
        question: "עד כמה חשוב לי שהמזון שאני מכניס/ה לגוף ימנע מחלות עתידיות שיכולות להיגרם לי?",
        openInput: false
        ,
    },
    {
        category: "Nutrition",
        idNumber: 7,
        question: 'אני מרגיש/ה שאני אוכל/ת "אכילה מודעת" (יש לי את היכולת להסתכל על האוכל ממקום מודע ולא הישרדותי)',
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 0,
        question: "עד כמה אני מגדיר/ה את עצמי כיום כאדם חברתי?",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 1,
        question: 'עד כמה אני מרגיש/ה חלק מ"קהילה" בחיים שלי כיום?',
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 2,
        question: "עד כמה אני מגדיר/ה את עצמי כאדם שיודע לפעול בקבוצה כיום?",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 3,
        question: "עד כמה הפעולות שלי היום מקדמות את הסביבה שלי?",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 4,
        question: "אני נוטה לרצות את הקבוצה ולא להיות נאמן לעקרונות שלי (כל קבוצה חברתית)",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 5,
        question: "עד כמה אני פתוח/ה ללמוד דברים מהסביבה שלי כיום?",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 6,
        question: "עד כמה אני תופס/ת עצמי כמנהיג/ה בתוך הסביבה שלי כיום?",
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 7,
        question: 'עד כמה הסביבה שלי תורמת לרמת האושר שלי כיום?',
        openInput: false
        ,
    },
    {
        category: "Community",
        idNumber: 8,
        question: 'עד כמה אני נוטה לשתף את הסביבה שלי ברגשות שלי ובחיים שלי כיום?',
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 0,
        question: "עד כמה אני תופס/ת את עצמי כאדם שמונע מהצורך בבריאות הגוף והנפש?",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 1,
        question: 'עד כמה אורח חיים בריא מעניק לי היום תחושת ביטחון?',
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 2,
        question: "עד כמה אני גמיש/ה בראייה שלי את המציאות ואת אפשרויות הבחירה שלי בעולם? (גמישות מחשבתית)",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 3,
        question: "אני נוטה לשתף אנשים ברגשות שלי",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 4,
        question: "עד כמה אני מצליח/ה להשיג את המטרות שאני מציב לעצמי היום?",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 5,
        question: "עד כמה אני מעריך/ה את עצמי היום? (עם כל מה שאני יודע/ת על עצמי כרגע)?",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 6,
        question: "עד כמה אני מרגיש/ה שאני מממש/ת את היכולות שלי נכון להיום?",
        openInput: false
        ,
    },
    {
        category: "Values",
        idNumber: 7,
        question: 'אני נוטה לחוש חמלה כלפי כל מה שקיים ומתרחש סביבי?',
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 0,
        question: "עד כמה אני תופס/ת עצמי כאדם מדיטטיבי? (תודעה שלווה, חשיבה בהירה ואיזון נפשי)",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 1,
        question: 'עד כמה אני מצליח/ה לתקשר בחיים שלי עם תת המודע שלי? (החלקים בי שמניעים אותי בחיים ואינני מודע/ת אליהם)',
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 2,
        question: "עד כמה אני תופס/ת עצמי כבעל/ת דימיון עשיר?",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 3,
        question: "עד כמה אני קשוב/ה לאינטואיציה שלי? (חשיבה על פי תחושת בטן)",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 4,
        question: "עד כמה אני מרגיש/ה מחובר/ת לנשמה שלי?",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 5,
        question: "עד כמה אני מרגיש/ה מחובר/ת לייעוד שלי בחיים? (התכלית לשמה הגעתי לעולם)",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 6,
        question: "עד כמה אני תופס/ת עצמי כאדם שיודע/ת לנהל את הרגשות שלי?",
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 7,
        question: 'עד כמה אני מודע/ת בחיים שלי לשיעורים שאני עובר/ת מידי יום? (אתגרים)',
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 8,
        question: 'עד כמה אני מרגיש/ה שאני מונע/ת ביום יום שלי מאהבה? (תחושה פנימית נטולת אינטרס ופחד)',
        openInput: false
        ,
    },
    {
        category: "Spirit",
        idNumber: 9,
        question: 'עד כמה אני מרגיש/ה שיש לי יכולת לראות מעבר למה שהפיזי מאפשר לי?',
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 0,
        question: "כשאני חושב/ת על עצמי במצב מיטבי של עצמי, אני אומר/ת על עצמי שאני ...",
        openInput: true
        ,
    },
    {
        category: "Identity",
        idNumber: 1,
        question: 'מהם הדברים שאני עושה/ אומר/ת חושב/ת שקובעים שאני ________?',
        openInput: true
        ,
    },
    {
        category: "Identity",
        idNumber: 2,
        question: "עד כמה אתה מרגיש/ה נכון להיום שאת/ה _____ לפחות 80% מהזמן שלך?",
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 3,
        question: "עד כמה אני פועל/ת ביום יום שלי, נכון להיום, כדי להיות ______?",
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 4,
        question: "עד כמה אני מרגיש/ה שאני צריך/ה לוותר על דברים אחרים שחשובים לי כדי להיות _____?",
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 5,
        question: "עד כמה אני מרגיש/ה שהסביבה שלי מאפשרת לי להיות _____?",
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 6,
        question: "עד כמה אני מרגיש/ה שיש לי את כל המיומנויות שאני צריך/ה כדי להיות ____ ?",
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 7,
        question: 'עד כמה אני מרגיש/ה שהאמונות שלי על עצמי ועל העולם משרתות את התפיסה שלי שאני _________?',
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 8,
        question: 'עד כמה אני מרגיש/ה שההתנהגות שלי ביום יום משרתת את התפיסה שלי שאני __________?',
        openInput: false
        ,
    },
    {
        category: "Identity",
        idNumber: 9,
        question: 'עד כמה חשוב לי להיות __________ לחלוטין?',
        openInput: false
        ,
    },
]

const eachQuestion = {
    category: "",
    grade: Number,
    id: number
}