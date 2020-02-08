<!--
  Reusable component
  Confirmation modal - <confirmation-modal></confirmation-modal>
  Uses bootstrap 4 modal
  Intended to be used as a safe guard against accidental button click on critical event on the application such as deleting & updating records.
  Properties needed for this component:
    1. title - Title of the Modal (Top of the modal) - String
    2. message - Message of the Modal (Middle of the modal) - String
    3. confirmButtonText - Text to display inside the confirm button - String
    4. parameter - Any parameter that needs to be passed back to the parent. (delete, update, etc..)
    5. data - Data that needs to be passed back to the parent (ids, name, etc..)

  If the confirm button is clicked, this component will emit back with the event name 'confirmClicked'. Listen through @confirmClicked="yourMethod"
  The parameters and data will be emitted back in the form of an object.
  
  Use example:
    # Insert the modal component
      <ConfirmationModal
        ref="modal" -> Reference to the modal, so that parent component can call on the function of a child modal.
        :title="modalTitle" -> What we would like to pass as the modal title.
        :message="modalMessage" -> What we would like to pass as the modal message.
        :confirmButtonText="modalConfirmButtonText" -> What we would like to pass as the modal confirm button text
        :parameter="modalParameter" -> Parameter that we would like the modal to pass back to the parent component.
        :data="modalData" -> Parameter that we would like the modal to pass back to the parent component.
        @confirmClicked="modalConfirmClicked($event)" -> Listen to emit from modal component.
      ></ConfirmationModal>
    # Button example
      <a
        href="#"
        v-on:click="confirmDelete($event, user.id)"
        class="btn btn-danger mb-1 ml-1 mr-1 btn-sm"
      >Delete</a>
    # Method to handle button click event
      confirmDelete: function(event, id) {
        this.$refs.modal.show();
        this.modalTitle = "Confirm User Deletion";
        this.modalMessage = "User will be deleted. Are you sure?";
        this.modalConfirmButtonText = "Confirm";
        this.modalParameter = "delete";
        this.modalData = id;
      },
-->

<template>
  <div id="confirmationModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" v-on:click="confirm">
            <transition-group name="fade" mode="out-in">
              <span key="1" v-if="!loading">{{ confirmButtonText }}</span>
              <span
                key="2"
                v-if="loading"
                class="spinner-border"
                role="status"
                aria-hidden="true"
                style="width: 1rem; height: 1rem"
              ></span>
              <span key="2" v-if="loading" class="sr-only">Loading</span>
            </transition-group>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ConfirmationModal",
  components: {},
  data() {
    return {
      loading: false
    };
  },
  props: ["title", "message", "confirmButtonText", "parameter", "data"],
  methods: {
    show: function() {
      $("#confirmationModal").modal("show");
    },
    close: function() {
      $("#confirmationModal").modal("hide");
    },
    finishLoading: function() {
      this.loading = false;
    },
    // Handle what happens when confirm button is clicked
    confirm: function() {
      // Declare a local variable for parameter & data
      let parameter = this.parameter;
      let data = this.data;
      // Start loading spinner
      this.loading = true;
      // Emit back to parent with an object containing the parameter and data value
      this.$emit("confirmClicked", { parameter, data });
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>