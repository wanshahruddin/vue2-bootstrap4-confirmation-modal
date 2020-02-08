<template>
  <div>
    <ConfirmationModal
      ref="modal"
      :title="modalTitle"
      :message="modalMessage"
      :confirmButtonText="modalConfirmButtonText"
      :parameter="modalParameter"
      :data="modalData"
      @confirmClicked="modalConfirmClicked($event)"
    ></ConfirmationModal>
    <div class="form-group">
      <!-- TODO: Change this section to search -->
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <!-- {{users}} -->
        <caption>List of users.</caption>
        <thead>
          <tr style="background-color: #f6f6f6; text-align: center;">
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th>Status</th>
            <th>Permission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="text-center text-nowrap align-middle">
              <img src="https://via.placeholder.com/150" style="width: 60px; height: auto;" />
            </td>
            <td class="text-center text-nowrap align-middle">
              <span>{{ user.name }}</span>
            </td>
            <td class="text-center text-nowrap align-middle">
              <span>{{ user.email }}</span>
            </td>
            <td class="text-center text-nowrap align-middle">
              <a
                href="#"
                v-tooltip="'View user information.'"
                class="btn btn-info mb-1 ml-1 mr-1 btn-sm"
              >View</a>
            </td>
            <td class="text-center text-nowrap align-middle">
              <a
                href="#"
                v-tooltip="'User\'s account status.'"
                class="btn btn-success mb-1 ml-1 mr-1 btn-sm"
              >Active</a>
            </td>
            <td class="text-center text-nowrap align-middle">
              <a
                href="#"
                v-tooltip="'View user account permissions.'"
                class="btn btn-secondary mb-1 ml-1 mr-1 btn-sm"
              >Permissions</a>
            </td>
            <td class="text-center text-nowrap align-middle">
              <a
                href="#"
                v-tooltip="'Edit user account.'"
                class="btn btn-primary mb-1 ml-1 mr-1 btn-sm"
              >Edit</a>
              <a
                href="#"
                v-tooltip="'Delete user account.'"
                v-on:click="confirmDelete($event, user.id)"
                class="btn btn-danger mb-1 ml-1 mr-1 btn-sm"
              >Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ConfirmationModal from "./reusables/ConfirmationModal.vue";
export default {
  name: "UserList",
  components: {
    ConfirmationModal
  },
  data() {
    return {
      users: [
        {
          id: 23,
          name: "Dr. Ezra Altenwerth I",
          email: "maxime26@example.com",
          avatar: "/images/default-avatar.png",
          email_verified_at: "2020-02-05 02:06:28",
          is_active: "1",
          created_at: "2020-02-05 02:06:29",
          updated_at: "2020-02-05 02:06:29"
        },
        {
          id: 24,
          name: "Andres Langosh",
          email: "gutkowski.annetta@example.net",
          avatar: "/images/default-avatar.png",
          email_verified_at: "2020-02-05 02:06:28",
          is_active: "1",
          created_at: "2020-02-05 02:06:29",
          updated_at: "2020-02-05 02:06:29"
        },
        {
          id: 25,
          name: "Garth Wisoky",
          email: "gislason.myrna@example.com",
          avatar: "/images/default-avatar.png",
          email_verified_at: "2020-02-05 02:06:28",
          is_active: "1",
          created_at: "2020-02-05 02:06:29",
          updated_at: "2020-02-05 02:06:29"
        },
        {
          id: 26,
          name: "Giovanna Mante",
          email: "neichmann@example.net",
          avatar: "/images/default-avatar.png",
          email_verified_at: "2020-02-05 02:06:28",
          is_active: "1",
          created_at: "2020-02-05 02:06:30",
          updated_at: "2020-02-05 02:06:30"
        },
        {
          id: 27,
          name: "Jewel Towne",
          email: "kallie.pouros@example.org",
          avatar: "/images/default-avatar.png",
          email_verified_at: "2020-02-05 02:06:28",
          is_active: "1",
          created_at: "2020-02-05 02:06:30",
          updated_at: "2020-02-05 02:06:30"
        }
      ],
      modalTitle: "", // Initialize modal title
      modalMessage: "", // Initalize modal message
      modalConfirmButtonText: "", // Initialize modal confirm button text
      modalData: "", // Initialize modal data
      modalParameter: "" // Initialize modal parameter.
    };
  },
  methods: {
    // Handle what happens when delete button is clicked
    confirmDelete: function(event, id) {
      // Call the function show() inside confirmation-modal component
      this.$refs.modal.show();
      // Change declared data that is binded to confirmation modal
      this.modalTitle = "Confirm User Deletion";
      this.modalMessage = "User will be deleted. Are you sure?";
      this.modalConfirmButtonText = "Confirm";
      this.modalParameter = "delete";
      this.modalData = id;
    },
    // Handle emits from confirmation-modal component
    modalConfirmClicked: function($event) {
      // This is where we put our event handler if the modal's confirm is clicked.
      // Delete the user etc..
      setTimeout(() => {
        console.log($event);
        this.$refs.modal.finishLoading();
      }, 2000); // Pretend the modal is loading and stop loading.
      setTimeout(() => {
        console.log($event);
        this.$refs.modal.close();
      }, 1000); // Close the modal after loading.
    }
  }
};
</script>

<style lang="sass" scoped>

</style>