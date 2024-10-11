package org.example.backend;

public record AppUser(String id, String userName,
                      String avatarUrl,
                      String authority
) {
}
