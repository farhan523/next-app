import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import Link from "next/link";

const WorkbookGlossaryBibliography = ({
  handleSubmit,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  workItem,
}) => {
  return (
    <>
      <NextPrevLesson
        // onClickNextLesson={handleSubmit}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        // nextLesson={nextLesson}
        // saveAndContinue={false}
        workItem={workItem}
      />
      <div className="mt-6">
        <p>
          “2022-2023 Common App Essay Prompts,” n.d.
          <Link href="https://www.commonapp.org/blog/2022-2023-common-app-essay-prompts/">
            https://www.commonapp.org/blog/2022-2023-common-app-essay-prompts/.
          </Link>
        </p>
        <p>
          “Apply to College with Common App | Your Future Starts Here,” n.d.
          <Link href="https://www.commonapp.org/">
            https://www.commonapp.org/.
          </Link>
          Adams, James Truslow. The Epic of America. 1st ed. Simon Publications,
          2001.
        </p>
        <p>
          Bargh, John A. and Morsella, Ezequiel, (2008 January; 3(1), 73), The
          Unconscious Mind, Perspectives on Psychological Science, 2008,
          January; 3(1), 73.
        </p>
        <p>
          The Berkeley Well-Being Institute. “Loving Yourself: Why and How to Do
          It,” n.d.
          <Link href="https://www.berkeleywellbeing.com/loving-yourself.html">
            https://www.berkeleywellbeing.com/loving-yourself.html.
          </Link>
        </p>
        <p>
          Coalition for College. “Prepare for & Apply to College with The,”
          December 5, 2022.
          <Link href="http://www.coalitionforcollegeaccess.org">
            http://www.coalitionforcollegeaccess.org.
          </Link>
        </p>
        <p>
          The Editors of Encyclopaedia Britannica. “Servomechanism |
          Technology.” Encyclopedia Britannica, July 20, 1998.
          <Link href="https://www.britannica.com/technology/servomechanism">
            https://www.britannica.com/technology/servomechanism.
          </Link>
        </p>
        <p>
          TFleischer, Morton. Building Your Mental Balance Sheet. (3rd ed.). The
          Fleischer Foundation, 2021
        </p>
        <p>
          Harvard Business Review. “The Surprising Secret to Selling Yourself,”
          August 7, 2014. Back Bay Books, 2007.
        </p>
        <p>
          Harvard Business Review. “The Surprising Secret to Selling Yourself,”
          August 7, 2014.
          <Link href="https://hbr.org/2012/08/the-surprising-secret-to-selli">
            https://hbr.org/2012/08/the-surprising-secret-to-selli.
          </Link>
        </p>
        <p>
          Hirsch, T. The Pace of Technological Change Is Faster Than Ever
          Before. Or Is It? Entrepreneur, 2021, September 24.
        </p>
        <p>
          Jelkovsky, Mary and Blue Star Press. The Gift of Self Love: A Workbook
          to Help You Build Confidence, Recognize Your Worth, and Learn to
          Finally Love Yourself. Workbook. Blue Star Press, 2021.
        </p>
        <p>
          Maltz, Maxwell. Psycho-Cybernetics, Updated and Expanded.
          TarcherPerigee, 2015.
        </p>
        <p>
          Osteen, Joel. Empty Out the Negative: Make Room for More Joy, Greater
          Confidence, and New Levels of Influence, n.d.
        </p>
        <p>
          “Home | Student Wallet,” n.d.
          <Link href="https://ourworldindata.org/technological-change">
            https://www.studentwallet.org/.
          </Link>
        </p>
        <p>
          U.S. Dept. of Labor. “Career One Stop.” careeronestop.org/, 2024.
          <Link href="https://www.careeronestop.org/">
            https://www.careeronestop.org/.
          </Link>
        </p>
        <p>
          United States Institute of Peace. “What Is Active Listening?,” n.d.
          <Link href="https://www.usip.org/public-education-new/what-active-listening">
            https://www.usip.org/public-education-new/what-active-listening.
          </Link>
        </p>
        <p>
          “U.S. Patent Statistics Summary Table, Calendar Years 1963 to 2020,
          05/2021 Update,” n.d.
          <Link href="https://www.uspto.gov/web/offices/ac/ido/oeip/taf/us_stat.htm">
            https://www.uspto.gov/web/offices/ac/ido/oeip/taf/us_stat.htm.
          </Link>
        </p>
      </div>
    </>
  );
};

export default WorkbookGlossaryBibliography;
