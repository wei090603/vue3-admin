const tabsHook = {
  setItem: function (arr: any) {
    localStorage.setItem('tabs', JSON.stringify(arr));
  },
  getItem: function () {
    return JSON.parse(localStorage.getItem('tabs') || '[]');
  },
};
export default tabsHook;
