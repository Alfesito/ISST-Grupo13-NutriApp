package es.upm.dit.isst.nutriapp.grupo13.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.upm.dit.isst.nutriapp.grupo13.model.Usuarios;
import es.upm.dit.isst.nutriapp.grupo13.repository.UsuariosRepository;
import org.springframework.http.ResponseEntity;


@Service
public class UsuarioService implements IUsuarioService{
    @Autowired
    private UsuariosRepository repository;

    @Override
    public List<Usuarios> getAll() {
        return (List<Usuarios>) repository.findAll();
    }

    @Override
    public Usuarios getById(String id) {
        return (Usuarios) repository.findById(id).get();
    }

    @Override
    public void remove(String id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Usuarios usuario) {
        repository.save(usuario);
    }

    @Override
    public boolean existeCorreo(String correo){
        return repository.existsById(correo);
    }

    @Override
    public boolean existeUsuario(String username){
        return repository.existsById(username);
    }
}
