import { useEffect, useState } from "react";
import { searchJsonObject } from "../utils/DataUtils";
import { getSortObjectsByKeyFn } from "../utils/Sortutils";

/**
 * Assuming Results Per Page is 16
 * ***
 * - Page 1 = Index 0-15
 * - Page 2 = Index 16-31
 * - Page 3 = Index 32-47
 * ***
 * (currentPageNumber - 1) * resultsPerPage = startingIndex\
 * (1 - 1) * 16 = 0\
 * (2 - 1) * 16 = 16\
 * (3 - 1) * 16 = 32
 * ***
 * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Array.prototype.slice</a> does not include the end index in its result\
 * An ending index 16 would not include index 16
 *
 * startingIndex + resultsPerPage = endingIndex\
 * 0 + 16 = 16\
 * 16 + 16 = 32\
 * 32 + 16 = 48\
 * [].slice(0,16) includes indexes 0-15
 *
 * @property pagedData: T this is a test
 */

function usePagination<T>(pageSize: number = 16) {
  const [resultsPerPage, setResultsPerPage] = useState<number>(pageSize);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [pagedData, setPagedData] = useState<T[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [pageButtonCount, setPageButtonCount] = useState<number>(3);
  const [pageButtonNumbers, setPageButtonNumbers] = useState<number[]>([]);
  const [sortKey, setSortKey] = useState<keyof T>();
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [totalRecords, setTotalRecords] = useState<number>(0);

  const filterFn = (item: T): boolean => searchJsonObject(item, filter);

  const getStartingIndex = () => (currentPageNumber - 1) * resultsPerPage;
  const getEndingIndex = () => getStartingIndex() + resultsPerPage;
  const getPage = (): T[] => {
    let sortFn = undefined;
    if (sortKey) {
      sortFn = getSortObjectsByKeyFn<T>(sortKey, sortDirection, d => `${d}`.toLowerCase());
    }
    return data.sort(sortFn).filter(filterFn).slice(getStartingIndex(), Math.min(data.filter(filterFn).length, getEndingIndex()))
  };

  const getPageCount = (): number => Math.ceil(data.filter(filterFn).length / resultsPerPage);

  const nextPage = (): void => setCurrentPageNumber((pageNumber) => Math.min(pageCount, pageNumber + 1));
  const previousPage = (): void => setCurrentPageNumber((pageNumber) => Math.max(1, pageNumber - 1));

  /**
   * Sets pageButtonNumbers to be used for display purposes
   * - Takes pageButtonCount into consideration
   * - Takes pageCount into consideration
   * - Takes currentPageNumber into consideration
   * ***
   * Will return an array of length min(pageButtonCount, pageCount)\
   * It will attempt to have the currentPageNumber in the middle of the array
   * ***
   * Assuming:\
   * pageButtonCount = 3\
   * currentPage = 5\
   * currentPage 1 will result in [1, 2, 3]\
   * currentPage 2 will result in [1, 2, 3]\
   * currentPage 3 will result in [2, 3, 4]\
   * currentPage 4 will result in [3, 4, 5]\
   * currentPage 5 will result in [4, 5, 6]\
   * currentPage 6 will result in [5, 6, 7]\
   * currentPage 7 will result in [5, 6, 7]
   */
  const updatePageButtonNumbers = () => {
    const numbersOnEachSideOfCurrentPage = Math.floor(pageButtonCount / 2);
    let startingPageNumber = Math.max(1, currentPageNumber - numbersOnEachSideOfCurrentPage);
    let endingPageNumber = startingPageNumber + pageButtonCount - 1;
    if (endingPageNumber > pageCount) {
      let diff = endingPageNumber - pageCount;
      startingPageNumber -= diff;
      endingPageNumber -= diff;
    }
    startingPageNumber = Math.max(1, startingPageNumber);
    endingPageNumber = Math.min(pageCount, endingPageNumber);

    let pageNumbers: number[] = [];
    for (let i = startingPageNumber; i <= endingPageNumber; i++) {
      pageNumbers.push(i);
    }
    if (pageNumbers.length === 0) {
      pageNumbers.push(1);
    }
    setPageButtonNumbers(pageNumbers);
  };

  useEffect(() => {
    setPagedData(getPage());
    const pageCount = getPageCount();
    setPageCount(pageCount);
    setHasNextPage(currentPageNumber < pageCount);
    setTotalRecords(data.length);
  }, [data]);

  useEffect(() => {
    setCurrentPageNumber(1);
    setPageCount(getPageCount());
    setPagedData(getPage());
    setHasPreviousPage(currentPageNumber > 1);
    setHasNextPage(currentPageNumber < pageCount);
    setTotalRecords(data.filter(filterFn).length);
  }, [filter]);

  useEffect(() => {
    setCurrentPageNumber(1);
    setPageCount(getPageCount());
  }, [resultsPerPage]);

  useEffect(() => {
    setPagedData(getPage());
    setHasPreviousPage(currentPageNumber > 1);
    setHasNextPage(currentPageNumber < pageCount);
  }, [currentPageNumber, resultsPerPage, sortKey, sortDirection]);

  useEffect(updatePageButtonNumbers, [pageButtonCount, pageCount, currentPageNumber]);

  return {
    resultsPerPage,
    setData,
    setResultsPerPage,
    currentPageNumber,
    setCurrentPageNumber,
    filterFn,
    data,
    totalRecords,
    setTotalRecords,
    pagedData,
    pageCount,
    hasPreviousPage,
    previousPage,
    hasNextPage,
    nextPage,
    setFilter,
    setPageButtonCount,
    pageButtonNumbers,
    setSortKey,
    setSortDirection
  };
}

export default usePagination;
