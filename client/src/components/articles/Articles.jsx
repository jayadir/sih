import React, { useState, useRef } from "react";
import styles from "./Articles.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState("english");
  const currentUtterance = useRef(null);

  const english = {
    "Article 52": "India shall have a President.",
    "Article 53": "The President holds the executive power of India, which he can use directly or through officers under him, as per the Constitution. The President is the supreme commander of the Defence Forces, but his use of this power is regulated by law. This article does not transfer any duties from state governments or other authorities to the President, and Parliament can assign duties to other authorities as well.",
    "Article 54": "The President is elected by an electoral college. This college consists of elected members of both Houses of Parliament and the elected members of the Legislative Assemblies of the States. For this election, 'State' includes the National Capital Territory of Delhi and the Union Territory of Puducherry.",
    "Article 55": "The election of the President should ensure equal representation from all states. The number of votes for each member of Parliament and Legislative Assemblies is calculated based on the population of the state and the number of elected members. The election follows a proportional representation system with a single transferable vote, and voting is done by secret ballot.",
    "Article 56": "The President holds office for a term of five years from the date they assume office. They may resign by writing to the Vice-President, or be removed by impeachment for violating the Constitution. The President continues to hold office until the next President takes over, even after their term ends.",
    "Article 57": "Anyone who has held the office of President, or is currently the President, is eligible for re-election to the office, as long as they meet the other requirements outlined in the Constitution."
  };

  const hindi = {
    "Article 52": "भारत का एक राष्ट्रपति होगा.",
    "Article 53": "राष्ट्रपति के पास भारत की कार्यकारी शक्ति है, जिसका उपयोग वह संविधान के अनुसार सीधे या अपने अधीनस्थ अधिकारियों के माध्यम से कर सकते हैं। राष्ट्रपति रक्षा बलों का सर्वोच्च कमांडर है, लेकिन उसकी इस शक्ति का उपयोग कानून द्वारा नियंत्रित होता है। यह अनुच्छेद राज्य सरकारों या अन्य प्राधिकारियों से राष्ट्रपति को कोई कर्तव्य हस्तांतरित नहीं करता है, और संसद अन्य अधिकारियों को भी कर्तव्य सौंप सकती है।",
    "Article 54": "राष्ट्रपति का चुनाव एक निर्वाचक मंडल द्वारा किया जाता है। इस कॉलेज में संसद के दोनों सदनों के निर्वाचित सदस्य और राज्यों की विधान सभाओं के निर्वाचित सदस्य शामिल होते हैं। इस चुनाव के लिए, 'राज्य' में राष्ट्रीय राजधानी क्षेत्र दिल्ली और केंद्र शासित प्रदेश पुडुचेरी शामिल हैं।",
    "Article 55": "राष्ट्रपति के चुनाव में सभी राज्यों का समान प्रतिनिधित्व सुनिश्चित होना चाहिए। संसद और विधानसभाओं के प्रत्येक सदस्य के लिए वोटों की संख्या की गणना राज्य की जनसंख्या और निर्वाचित सदस्यों की संख्या के आधार पर की जाती है। चुनाव एकल हस्तांतरणीय वोट के साथ आनुपातिक प्रतिनिधित्व प्रणाली का पालन करता है, और मतदान गुप्त मतदान द्वारा किया जाता है।",
    "Article 56": "राष्ट्रपति उनके पद ग्रहण करने की तिथि से पांच वर्ष की अवधि के लिए पद पर रहते हैं। वे उपराष्ट्रपति को पत्र लिखकर इस्तीफा दे सकते हैं, या संविधान का उल्लंघन करने के लिए महाभियोग द्वारा हटाया जा सकता है। राष्ट्रपति तब तक पद पर बने रहते हैं जब तक कि अगला राष्ट्रपति कार्यभार नहीं संभाल लेता, यहां तक कि उनका कार्यकाल समाप्त होने के बाद भी।",
    "Article 57": "जो कोई भी राष्ट्रपति का पद संभाल चुका है, या वर्तमान में राष्ट्रपति है, वह इस पद के लिए फिर से चुनाव के लिए पात्र है, जब तक कि वे संविधान में उल्लिखित अन्य आवश्यकताओं को पूरा करते हैं।"
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const articles = lang === "english" ? english : hindi;

  const handleSpeak = (text) => {
    if (currentUtterance.current) {
      speechSynthesis.cancel();
      currentUtterance.current = null;
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      currentUtterance.current = utterance;
      utterance.onend = () => {
        currentUtterance.current = null;
      };
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.goHomeButton} onClick={handleGoHome}>
          Home
        </button>
        <button
          className={styles.langButton}
          onClick={() => setLang(lang === "english" ? "hindi" : "english")}
        >
          {lang === "english" ? "Switch to Hindi" : "Switch to English"}
        </button>
      </div>

      <h2 className={styles.blogHeading}>Articles</h2>
      <div className={styles.articleList}>
        {Object.entries(articles).map(([article, content]) => (
          <div key={article} className={styles.articleCard}>
            <h5 className={styles.articleTitle}>{article}</h5>
            <p className={styles.articleText}>{content}</p>
            <button
              className={styles.speakerButton}
              onClick={() => handleSpeak(content)}
            >
              <img
                src="/images/speaker.png"
                alt="Speaker"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;