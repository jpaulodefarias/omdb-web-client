export const createSearchStore = () => ({
  result: null,
  setResult(result) {
    this.result = result;
  },
  input: null,
  setInput(input) {
    this.input = input;
  },
  loading: null,
  setLoading(loading) {
    this.loading = loading;
  },
  error: null,
  setError(error) {
    this.error = error;
  },
  reset() {
    this.result = null;
    this.error = null;
    this.input = null;
    this.loading = null;
  }
});
