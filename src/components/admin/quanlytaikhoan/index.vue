<template >
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
            <button class="btn btn-success">Add new user</button>
        </div>
        <div class="row">
             <div class="table-responsive mt-3">
                                <table class="table align-middle mb-0">
                                    <thead class="table-light rounded">
                                        <tr>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Username</th>
                                            <th class="text-center">Email</th>
                                            <th class="text-center">Role</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">a</td>
                                            <td class="text-center">A@gmail.com</td>
                                            <td class="text-center">User</td>
                                            <td class="text-center">
                                                <button class="btn btn-primary mx-1">View</button>
                                                <button class="btn btn-warning mx-1">Edit</button>
                                                <button class="btn btn-danger mx-1">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="text-center">b</td>
                                            <td class="text-center">B@gmail.com</td>
                                            <td class="text-center">User</td>
                                            <td class="text-center">
                                                <button class="btn btn-primary mx-1">View</button>
                                                <button class="btn btn-warning mx-1">Edit</button>
                                                <button class="btn btn-danger mx-1">Delete</button>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
        </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>