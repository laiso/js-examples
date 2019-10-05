import Doge from "./Doge";

export default {
  components: [
    Doge
  ],
  data: {
    bundler: "Parcel"
  },
  template: `
    <div class="container">
        <p>
            Hello {{bundler}}
        </p>
        <doge />
    </div>
    `
}
