import React, {useState, useRef} from "react";
import styles from "../citator.module.css";

const isEmptyString = (str) => {
  return str === "";
};

const generateCaseHeader = (p1, p2) => {
  if (isEmptyString(p1)) {
    return `${p2},`;
  } else if (isEmptyString(p2)) {
    return `${p1},`;
  } else if (!isEmptyString(p1) && !isEmptyString(p2)) {
    return `${p1} v. ${p2}, `;
  } else {
    return ``;
  }
};

const generatePincite = (pages) => {
  const startPageExists = typeof pages[0] === undefined ? false : true;
  const endPageExists = typeof pages[1] === undefined ? false : true;
  if (!startPageExists && !endPageExists) {
    return `, ${pages[0]}–${pages[1]}`;
  } else if (startPageExists && !endPageExists) {
    return `, ${pages[0]}`;
  } else if (!startPageExists && endPageExists) {
    return `, ${pages[1]}`;
  } else {
    return " ";
  }
};

export const Case = ({
  signal = "",
  p1 = "",
  p2 = "",
  volume = -1,
  reporter = "",
  page = -1,
  pincite = [],
  court = "",
  year = -1,
  parenthetical = "",
  caseBrief,
}) => {
  const ref = useRef();
  const [caseBriefVisible, setCaseBriefVisible] = useState(false);
  const handleToggle = () => {
    setCaseBriefVisible((prev) => !prev);
  };

  const caseHeader = generateCaseHeader(p1, p2);
  const blueBookSignal = isEmptyString(signal) ? "" : `${signal} `;
  const _volume = volume === -1 ? "" : `${volume} `;
  const _reporter = isEmptyString(reporter) ? "" : `${reporter} `;
  const _page = page === -1 ? "" : `${page}`;
  const _pincite = generatePincite(pincite);
  let _court;
  if (isEmptyString(_court)) {
    _court = "";
  } else if (court === "U.S.") {
    _court = `(`;
  } else {
    _court = `(${court} `;
  }
  const _year = year === -1 ? "" : `${year})`;
  const _parenthetical = isEmptyString(parenthetical)
    ? ""
    : ` (${parenthetical})`;

  return (
    <span
      className={
        caseBrief ? `${styles.case} ${styles.caseHasBrief}` : `${styles.case}`
      }
      onClick={handleToggle}
      ref={ref}>
      <span className={styles.blueBookSignal}>{blueBookSignal}</span>
      <span className={styles.caseName}>{caseHeader}</span>
      <span className={styles.caseVolume}>{_volume}</span>
      <span className={styles.caseReporter}>{_reporter}</span>
      <span className={styles.caseStartPage}>{_page}</span>
      <span className={styles.casePinCite}>{_pincite}</span>
      <span className={styles.caseCourt}>{_court}</span>
      <span className={styles.caseYear}>{_year}</span>
      <span className={styles.caseParenthetical}>{_parenthetical}</span>
      {caseBrief ? (
        <div
          className={
            caseBriefVisible
              ? `${styles.caseBrief} ${styles.caseBriefVisible}`
              : `${styles.caseBrief} ${styles.caseBriefNotVisible}`
          }>
          <div className={styles.caseBriefContent}>{caseBrief}</div>
        </div>
      ) : (
        <></>
      )}
    </span>
  );
};
