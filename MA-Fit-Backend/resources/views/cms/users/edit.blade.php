{{-- resources/views/cms/users/edit.blade.php --}}
@extends('layouts.cms')
@section('title', 'User aanpassen - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">User aanpassen</h1>
        <div class="text-muted small">Bewerk de user: <strong>{{ $user->name }}</strong></div>
    </div>
    <a href="{{ route('cms.users.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.users.update', $user) }}" class="row g-3">
    @csrf
    @method('PUT')

    <div class="col-md-6">
        <label class="form-label">Naam</label>
        <input
            type="text"
            name="name"
            id="name"
            class="form-control @error('name') is-invalid @enderror"
            value="{{ old('name', $user->name) }}"
        >
        @error('name')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            class="form-control @error('email') is-invalid @enderror"
            value="{{ old('email', $user->email) }}"
        >
        @error('email')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    {{-- <div class="col-12">
        <label class="form-label">Wachtwoord</label>
        <textarea
            type="password"
            name="password"
            id="password"
            class="form-control @error('password') is-invalid @enderror"
        >{{ old('password', $user->password) }}</textarea>
        @error('password')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div> --}}
    
    <div class="col-md-6">
        <label class="form-label">Role</label>
        <div class="input-group">
            <select
                name="role"
                class="form-control @error('role') is-invalid @enderror"
            >
            <option value="">-- Choose a role --</option>
            <option value="user" {{ old('role', $user->role) === 'user' ? 'selected' : '' }}>
                User
            </option>
            <option value="admin" {{ old('role', $user->role) === 'admin' ? 'selected' : '' }}>
                Admin
            </option>
        </select>
            @error('role')<div class="invalid-feedback d-block">{{ $message }}</div>@enderror
        </div>
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.users.index') }}" class="btn btn-outline-secondary">Annuleren</a>

        <div class="ms-auto">
            <form action="{{ route('cms.users.destroy', $user) }}"
                  method="POST"
                  onsubmit="return confirm('Weet je zeker dat je deze user wilt verwijderen?');">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-outline-danger">
                    Verwijderen
                </button>
            </form>
        </div>
    </div>
</form>

@push('scripts')
<script>
    // Color sync
    const picker = document.getElementById('colorPicker');
    const colorText = document.getElementById('colorText');

    if (picker && colorText) {
        picker.addEventListener('input', () => colorText.value = picker.value);
        colorText.addEventListener('input', () => {
            if (/^#[0-9a-fA-F]{6}$/.test(colorText.value)) picker.value = colorText.value;
        });
    }
</script>
@endpush
@endsection
