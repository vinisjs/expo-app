import { ScrollView, View, Button, Alert, TextInput } from "react-native";
import "@/global.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Importando o Dialog

export default function AdminHomeScreen() {
  const [users, setUsers] = useState<
    { id: number; name: string; age: number }[]
  >([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editUser, setEditUser] = useState<{
    id: number;
    name: string;
    age: number;
  } | null>(null);
  const [isDialogVisible, setDialogVisible] = useState(false);

  // Função de validação
  const validateForm = () => {
    if (!name || !age) {
      Alert.alert("Erro", "Nome e idade são obrigatórios.");
      return false;
    }
    if (isNaN(Number(age))) {
      Alert.alert("Erro", "Idade deve ser um número válido.");
      return false;
    }
    return true;
  };

  // Adicionar ou editar usuário
  const handleSaveUser = () => {
    if (!validateForm()) return;

    if (editUser) {
      setUsers(
        users.map((user) =>
          user.id === editUser.id ? { ...user, name, age: parseInt(age) } : user
        )
      );
      setEditUser(null);
    } else {
      setUsers([...users, { id: Date.now(), name, age: parseInt(age) }]);
    }

    setName("");
    setAge("");
  };

  // Editar um usuário (abre o modal)
  const handleEditUser = (user: { id: number; name: string; age: number }) => {
    setName(user.name);
    setAge(user.age.toString());
    setEditUser(user);
    setDialogVisible(true); // Abrir o modal
  };

  // Excluir um usuário
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Fechar o modal
  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  // Salvar alterações no modal
  const handleSaveChanges = () => {
    if (!validateForm()) return;

    if (editUser) {
      setUsers(
        users.map((user) =>
          user.id === editUser.id ? { ...user, name, age: parseInt(age) } : user
        )
      );
      setEditUser(null);
    }

    setDialogVisible(false);
    setName("");
    setAge("");
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-4">
        <View>
          <Card>
            <CardHeader className="flex-row gap-4">
              <View>
                <Avatar alt={"User Avatar"}>
                  <AvatarImage
                    source={{ uri: "https://github.com/vinisjs.png" }}
                  ></AvatarImage>
                  <AvatarFallback>
                    <Text>VS</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
              <View>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage your users</CardDescription>
              </View>
            </CardHeader>

            <CardContent>
              {/* Formulário de entrada para nome e idade */}
              <View className="mb-4">
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  aria-labelledby="nameInput"
                />
              </View>
              <View className="mb-4">
                <Input
                  placeholder="Age"
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                  aria-labelledby="ageInput"
                />
              </View>

              {/* Botão para salvar ou adicionar o usuário */}
              <Button
                title={editUser ? "Save Changes" : "Add User"}
                onPress={handleSaveUser}
              />

              {/* Exibição dos usuários */}
              <View className="mt-4">
                {users.map((user) => (
                  <Card key={user.id} className="mb-4">
                    <CardHeader className="flex-row gap-4">
                      <View>
                        <Avatar alt={user.name}>
                          <AvatarImage
                            source={{ uri: "https://github.com/vinisjs.png" }}
                          ></AvatarImage>
                          <AvatarFallback>
                            <Text>{user.name[0]}</Text>
                          </AvatarFallback>
                        </Avatar>
                      </View>
                      <View className="flex-1">
                        <CardTitle className="text-lg font-semibold">
                          {user.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {user.age} years old
                        </CardDescription>
                      </View>
                    </CardHeader>
                    <CardContent className="flex-row gap-2">
                      <Button
                        title="Edit"
                        onPress={() => handleEditUser(user)}
                      />
                      <Button
                        title="Delete"
                        onPress={() => handleDeleteUser(user.id)}
                      />
                    </CardContent>
                  </Card>
                ))}
              </View>
            </CardContent>
          </Card>

          {/* Modal para editar usuário */}
          <Dialog open={isDialogVisible} onOpenChange={setDialogVisible}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Edit the name and age of the user.
              </DialogDescription>
              <View className="mb-4">
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  style={{ borderBottomWidth: 1, marginBottom: 10 }}
                />
              </View>
              <View className="mb-4">
                <TextInput
                  placeholder="Age"
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                  style={{ borderBottomWidth: 1 }}
                />
              </View>
              <DialogFooter>
                <Button title="Cancel" onPress={handleCloseDialog} />
                <Button title="Save" onPress={handleSaveChanges} />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
