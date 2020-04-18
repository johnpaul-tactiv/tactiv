def design_qr_path(obj, filename):
    return f"users/{obj.user.email}/{obj.category.name}/{obj.id}/{filename}"