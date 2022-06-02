import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LRev</title>
        <meta name="keywords" content="math and cs notes" />
      </Head>
      <h1>LRev</h1>
      <p>
        LRev is a collection of law school outlines. The outlines are from
        various courses I&rsquo;ve taken in law school, as well as independent
        readings I had to do as an articles editor for Law Review. I expect most
        of this site&rsquo;s readers to be law school students or other legal
        professionals (e.g., I assume readers are familiar with terms like{" "}
        <i>prayer for relief</i> or <i>motion in limine</i>). That said,{" "}
        <u>please read the disclaimer below before proceeding.</u>
      </p>
      <h2>
        <b style={{color: "firebrick"}}>
          <u>DISCLAIMER</u>
        </b>
      </h2>
      <ol>
        <li>
          All of the information on this website is provided for educational
          purposes only, and should not be construed as legal advice or as an
          offer to perform legal services on any subject matter.
        </li>
        <li>
          No recipients of content from this site, clients or otherwise, should
          act or refrain from acting on the basis of this website&rsquo;s
          content without seeking a licensed attorney&rsquo;s services.
        </li>
        <li>
          The author makes no warranty, expressed or implied, about the accuracy
          or reliability of the information. The legal field develops rapidly,
          and a single person cannot keep track of all the changes.
        </li>
        <li>
          No lawyer-client, solicitor-client or attorney-client relationship is
          created through the use of this website.
        </li>
        <li>
          The author will not respond to legal inquiries, and contacting the
          author — whether by chat, email, phone, or mail — does not establish
          an attorney-client relationship.
        </li>
        <li>
          This website and its contents are provided <u>AS IS</u> without
          warrany of any kind, either expressed or implied, including, but not
          limited to:
          <ul>
            <li>the implied warranty of merchantability, or</li>
            <li>
              the implied warranty of fitness for a particular purpose, or
            </li>
            <li>the implied warranty of non-infringement</li>
          </ul>
        </li>
        <li>
          The author expressly disclaims all liability with respect to actions
          taken or not taken based on any or all of this website&rsquo;s
          contents.
        </li>
        <li>
          If you need legal assistance, contact a licensed attorney in your
          jurisdiction.
        </li>
      </ol>
    </div>
  );
}
